import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private route:Router,private common:CommonService) { }

  ngOnInit() {
    
  }
  preview(){
	let func=this;
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
				$('section', '#result').each(function () {
					func.common.pptData.push($(this)
                    .prop('outerHTML')) //log every element found to console output
				});
				// var html = "<!DOCTYPE html><html><head>" + headHtml + "</head><body>" + bodyHtml + "</body></html>";
				// var blob = new Blob([bodyHtml], {type: "text/html;charset=utf-8"});
				// localStorage.setItem('html',bodyHtml);
				func.route.navigateByUrl('/subject-View') 
				console.log(func.common.pptData)
				// saveAs(blob, "slides_p.html");
			});
		});
  }

  change(){
	
  }
}
