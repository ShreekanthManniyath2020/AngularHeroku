import { Component  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

//var loadAPI: Promise<any>;

export class AppComponent {
  title = 'MyMovie';


  constructor(public router:Router){

  // loadAPI = new Promise((resolve) => {
     //    this.loadScript();
  //      resolve(true);
  // });


//     this.router.events.subscribe(event => {
//           let node = document.createElement('script');
//           node.type = 'text/javascript';
//           node.async = false;
//           node.src = 'src/assets/js/modernizr-3.5.0.min.js';
//           document.getElementsByTagName('head')[0].appendChild(node);
//           node.src = 'src/assets/js/jquery.min.js';
//           document.getElementsByTagName('head')[0].appendChild(node);

//           node.src = 'src/assets/js/owl.carousel.min.js';
//           document.getElementsByTagName('head')[0].appendChild(node);

//           node.src = 'src/assets/js/tether.min.js';
//           document.getElementsByTagName('head')[0].appendChild(node);

//           node.src = 'src/assets/js/bootstrap.min.js';
//           document.getElementsByTagName('head')[0].appendChild(node);

//           node.src = 'src/assets/js/jquery.waypoints.min.js';
//           document.getElementsByTagName('head')[0].appendChild(node);

//           node.src = 'src/assets/js/jquery.stellar.min.js';
//           document.getElementsByTagName('head')[0].appendChild(node);

//           node.src = 'src/assets/js/main.js';
//           document.getElementsByTagName('head')[0].appendChild(node);


// })

  }


  public loadScript() {        
    var isFound = true;
    var scripts = document.getElementsByTagName("script")
    // for (var i = 0; i < scripts.length; ++i) {
    //     if ( scripts != null && scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
    //         isFound = true;
    //     }
    // }

    if (!isFound) {
        var dynamicScripts = ["src/assets/js/main.js","src/assets/js/modernizr-3.5.0.min.js","src/assets/js/jquery.min.js"];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}




}
