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
  check;

  ngOnInit() {
    
  }
  preview(){
	let func=this;
	console.log(this.check)
	let result = this.check.match("pptx");
	console.log(result)
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
				// func.route.navigateByUrl('/subject-View') 
				console.log(func.common.pptData)
				func.common.pptData=func.common.pptData.filter((res,i)=>i<9)
				localStorage.setItem('pptData',JSON.stringify(func.common.pptData))
				func.ShowBoolean=true;
				// saveAs(blob, "slides_p.html");
			});
		});
  }

  change(){
	this.route.navigateByUrl('/subject-View') 
  }
  checkName(eve){
	console.log(eve)
	console.log(eve.target.files[0].name)
	let x="Subject";
	if(eve.target.files[0].name){
	
	x= eve.target.files[0].name.toString();
	
	localStorage.setItem('name',x.replace(".pptx", ""))
	}
  }
  save(){
	let obj={menuName:this.inputMenu,slide:this.inputIndex}
	this.menuList.push(obj);
	this.inputMenu=undefined;
	this.inputIndex=undefined;
	localStorage.setItem('menulist',JSON.stringify(this.menuList))

  }
}
