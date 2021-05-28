//
//  ViewController.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/20.
//

import UIKit

class Login: UIViewController{

    @IBOutlet var idText: UITextField!
    @IBOutlet var pwText: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationController?.navigationBar.barTintColor = .systemTeal
        idText.delegate = self
        pwText.delegate = self
    }
    @IBAction func clickSubmit(_ sender: UIButton) {
        
        
        // 아이디 비번이 맞을경우
        guard let nextVC = self.storyboard?.instantiateViewController(identifier: "TakePhoto") as? TakePhoto else {return}
        nextVC.id = idText.text ?? ""
        self.navigationController?.pushViewController(nextVC, animated: true)
        
        
        // 틀릴경우
        
    }
    
    override func viewWillAppear(_ animated: Bool) {
        navigationController?.isNavigationBarHidden = true
    }
    
    // 화면 클릭시 키보드 내림처리
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        self.view.endEditing(true)
    }
}

// 키보드 return 클릭시 키보드 내림 처리
extension Login: UITextFieldDelegate {
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        idText.resignFirstResponder()
        pwText.resignFirstResponder()
        return true
    }
}


