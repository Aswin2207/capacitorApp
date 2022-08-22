import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { timeStamp } from 'console';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private route:Router,public common:CommonService,private http:HttpClient) { }
  inputMenu;
  inputIndex;
  menuList:any=[];
  ShowBoolean:boolean=false;
  check;
  url;
  appUrl;

  ngOnInit() {
	sessionStorage.clear();
    
  }
  preview(){
	let func=this;
	console.log(this.check)
	let result = this.check.match("pptx");
	console.log(result)
    $("#download-btn").click(function () {
			// if (!isDone) { return; }
			var cssText = "";
			$.get("./assets/css/pptx2html.css", function (data) {
				cssText = data;
			}).done(function () {
				var headHtml = "<style>" + cssText + "</style>";
        var $result = $("#result");
				var bodyHtml = $result.html();
				$('section', '#result').each(function (index, value ) {
					func.common.pptData.push($(this)
                    .prop('outerHTML')) //log every element found to console output
				});
				// var html = "<!DOCTYPE html><html><head>" + headHtml + "</head><body>" + bodyHtml + "</body></html>";
				// var blob = new Blob([bodyHtml], {type: "text/html;charset=utf-8"});
				// localStorage.setItem('html',bodyHtml);
				// func.route.navigateByUrl('/subject-View') 
				func.common.pptData=func.common.pptData.filter((res,i)=>i<6)

				func.ShowBoolean=true;
				func.common.pptData = [...new Set(func.common.pptData)];
				localStorage.setItem('pptData',JSON.stringify(func.common.pptData))
			});
		});
  }

  change(){
	this.route.navigateByUrl('/subject-View').then(()=>window.location.reload()) 
  }
  checkName(eve){
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
	this.common.menuList=this.menuList;
	localStorage.setItem('menulist',JSON.stringify(this.menuList));

  }
  onSelectFile(event) {
	const file = event.target.files && event.target.files[0];
	if (file) {
	  var reader = new FileReader();
	  reader.readAsDataURL(file);
	  reader.onload = (event) => {
		this.url = (<FileReader>event.target).result;
		sessionStorage.setItem('video',this.url)
	  }
	}
  }
  saveData(){
	// const headers = {"Content-Type":"application/json"};
	const menuData={
		folderName:localStorage.getItem('name'),
		menuList:this.menuList,
		htmlData:this.common.pptData
	}
    this.http.post<any>('https://digitieke.com/html-proto',menuData).subscribe(data => {
		this.appUrl="https://digitieke.com/angtieke?Subject="+localStorage.getItem('name');

    })

  }
  copyText(){
	$(".message").text("link copied");
	navigator.clipboard.writeText(this.appUrl);
  }
}
