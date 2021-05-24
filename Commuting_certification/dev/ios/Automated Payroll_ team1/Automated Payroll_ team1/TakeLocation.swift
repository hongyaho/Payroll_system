//
//  TakeLocation.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/24.
//

import UIKit
import CoreLocation

class TakeLocation: UIViewController, CLLocationManagerDelegate {

    @IBOutlet var latLbl: UILabel!
    @IBOutlet var longLBl: UILabel!
    @IBOutlet var userImage: UIImageView!
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
            latLbl.text = String(latitude)
            longLBl.text = String(longitude)
        }

    }
    @IBAction func clickNext(_ sender: UIButton) {
        
    }

    
}
