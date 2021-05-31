//
//  TakeLocation.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/24.
//

import UIKit
import CoreLocation
import Firebase

class Main: UIViewController, CLLocationManagerDelegate{

    var id = ""
    var lat = ""
    var long = ""
    @IBOutlet var latLbl: UILabel!
    @IBOutlet var longLBl: UILabel!
    @IBOutlet var idLBl: UILabel!
    
    @IBOutlet var nextBtn: UIButton!
    
    var locationManager: CLLocationManager!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        latLbl.text = lat
        longLBl.text = long
        
//        locationManager = CLLocationManager()
//        locationManager.delegate = self
//
//        // 사용자에게 위치 허용 alert 띄우기
//        locationManager.requestWhenInUseAuthorization()
//        locationManager.desiredAccuracy = kCLLocationAccuracyBest
//        locationManager.startUpdatingLocation()
//
//        // 위경도 가져오기
//        let coor = locationManager.location?.coordinate
//        let latitude = coor?.latitude
//        let longitude = coor?.longitude
//
//        if let latitude = latitude, let longitude = longitude {
//            latLbl.text = String(format:"%.3f", latitude)
//            longLBl.text = String(format:"%.3f", longitude)
//        }
        
        idLBl.text = id
        
    }
    @IBAction func clickLogout(_ sender: UIButton) {
        let firebaseAuth = Auth.auth()
        do {
            try firebaseAuth.signOut()
        } catch let signOutError as NSError {
            print ("Error signing out: %@", signOutError)
        }
        self.navigationController?.popToRootViewController(animated: true)
        
        
    }
    


}



