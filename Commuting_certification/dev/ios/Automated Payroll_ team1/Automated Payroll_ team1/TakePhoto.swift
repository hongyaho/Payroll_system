//
//  TakePhoto.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/24.
//

import UIKit

class TakePhoto: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    var id = ""

    @IBOutlet var idLbl: UILabel!
    @IBOutlet var cameraImage: UIImageView!
    override func viewDidLoad() {
        super.viewDidLoad()
        let camera = UIImagePickerController()
        camera.allowsEditing = false
        camera.sourceType = .camera
        camera.cameraDevice = .rear
        camera.cameraCaptureMode = .photo
        camera.delegate = self
        present(camera, animated: true, completion: nil)
        idLbl.text = id
    }
    
    @IBAction func clickNextBtn(_ sender: UIButton) {
        guard let nextVC = self.storyboard?.instantiateViewController(identifier: "TakeLocation") as? TakeLocation else {return}
        nextVC.id = id
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        
        if let image = info[UIImagePickerController.InfoKey.originalImage] as? UIImage {
            cameraImage.image = image
        }
        self.dismiss(animated: true, completion: nil)

    }
 

}

