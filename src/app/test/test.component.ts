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

  constructor(private route:Router,public common:CommonService) { }
  inputMenu;
  inputIndex;
  menuList:any=[];
  ShowBoolean:boolean=false;

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
					console.log((this));
					func.common.pptData.push($(this)
                    .prop('outerHTML')) //log every element found to console output
				});
				// var html = "<!DOCTYPE html><html><head>" + headHtml + "</head><body>" + bodyHtml + "</body></html>";
				// var blob = new Blob([bodyHtml], {type: "text/html;charset=utf-8"});
				// localStorage.setItem('html',bodyHtml);
				// func.route.navigateByUrl('/subject-View') 
				localStorage.setItem('pptData',JSON.stringify(func.common.pptData))
				func.ShowBoolean=true;
				func.common.pptData=func.common.pptData.filter((res,i)=>i<5)
				console.log(func.common.pptData)
				// saveAs(blob, "slides_p.html");
			});
		});
  }

  change(){
	this.route.navigateByUrl('/subject-View') 
  }
  save(){
	let obj={menuName:this.inputMenu,slide:this.inputIndex}
	this.menuList.push(obj);
	this.inputMenu=undefined;
	this.inputIndex=undefined;
	localStorage.setItem('menulist',JSON.stringify(this.menuList))

  }
}
