import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    
  }
  preview(){
    $("#download-btn").click(function () {
			console.log('clicked')
			// if (!isDone) { return; }
			var cssText = "";
			$.get("./assets/css/pptx2html.css", function (data) {
				cssText = data;
			}).done(function () {
				var headHtml = "<style>" + cssText + "</style>";
        var $result = $("#result");
				var bodyHtml = $result.html();
				console.log(bodyHtml)
				// var html = "<!DOCTYPE html><html><head>" + headHtml + "</head><body>" + bodyHtml + "</body></html>";
				var blob = new Blob([bodyHtml], {type: "text/html;charset=utf-8"});
				localStorage.setItem('html',bodyHtml);
				// saveAs(blob, "slides_p.html");
			});
		});
    this.route.navigateByUrl('/subject-View') 
  }
}
