//
//  MainPage.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/24.
//

import UIKit

class MainPage: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

    }
    @IBAction func clickLogoutBtn(_ sender: UIButton) {
        guard let loginVC = self.storyboard?.instantiateViewController(identifier: "Login") as? Login else {return}
        let sceneDelegate = UIApplication.shared.connectedScenes.first?.delegate as! SceneDelegate
        sceneDelegate.window?.rootViewController = loginVC
    }
    

}
