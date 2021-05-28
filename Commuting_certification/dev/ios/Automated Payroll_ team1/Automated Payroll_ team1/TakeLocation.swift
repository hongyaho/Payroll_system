//
//  TakeLocation.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/24.
//

import UIKit
import CoreLocation

class TakeLocation: UIViewController, CLLocationManagerDelegate{

    var id = ""
    @IBOutlet var latLbl: UILabel!
    @IBOutlet var longLBl: UILabel!
    @IBOutlet var idLBl: UILabel!
    
    @IBOutlet var nextBtn: UIButton!
    
    var locationManager: CLLocationManager!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        locationManager = CLLocationManager()
        locationManager.delegate = self
        
        // 사용자에게 위치 허용 alert 띄우기
        locationManager.requestWhenInUseAuthorization()
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.startUpdatingLocation()
        
        // 위경도 가져오기
        let coor = locationManager.location?.coordinate
        let latitude = coor?.latitude
        let longitude = coor?.longitude

        if let latitude = latitude, let longitude = longitude {
            latLbl.text = String(format:"%.3f", latitude)
            longLBl.text = String(format:"%.3f", longitude)
        }
        
        idLBl.text = id
        
    }
    @IBAction func clickLogout(_ sender: UIButton) {
        self.navigationController?.popToRootViewController(animated: true)
        
//        let sceneDelegate = UIApplication.shared.connectedScenes.first?.delegate as! SceneDelegate
//        sceneDelegate.window?.rootViewController = mainVC
        
    }
    
    // gps 에러 발생시 얼럿창 표출
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        let alert = UIAlertController(title: "Error", message: "Cannot get GPS", preferredStyle: .alert)
        let okAction = UIAlertAction(title: "OK", style: .default, handler: nil)
        alert.addAction(okAction)
        present(alert, animated: true, completion: nil)
    }

}



