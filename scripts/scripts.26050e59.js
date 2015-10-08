"use strict";angular.module("melamandoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{redirectTo:"/tolo"}).when("/tolo",{templateUrl:"views/tolo.html",controller:"QuestionCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]).run(["$rootScope","$location","$route","$timeout",function(a,b,c,d){a.apis="http://localhost:9001/",console.log(b.url()),a.layout={},a.layout.loading=!0,a.$on("$routeChangeStart",function(){console.log("$routeChangeStart"),d(function(){a.layout.loading=!0})}),a.$on("$routeChangeSuccess",function(){console.log("$routeChangeSuccess"),d(function(){a.layout.loading=!1},200)}),a.$on("$routeChangeError",function(){console.log("error"),a.layout.loading=!1})}]),angular.module("melamandoApp").controller("QuestionCtrl",["$scope",function(a){a.answeredQuestions=[],a.answers=[{text:"Maa' seee mandatela!!",audiourl:""},{text:"Noooo, no te la mandes!!",audiourl:""}],a.getChoice=function(){var b=Math.floor(2*Math.random())+0;return a.answers[b].text},a.submitQuestion=function(b){if(a.error=!1,""==b.value||void 0===b.value)a.error=!0;else{a.error=!1;var c={};c.a=a.getChoice(),c.q=b.value,c.time=Date.now(),a.saveQA(c)}},a.saveQA=function(b){a.answeredQuestions.push(b)}}]),angular.module("melamandoApp").run(["$templateCache",function(a){a.put("views/tolo.html",'<div class="preloader" ng-show="layout.loading"> <i class="fa fa-refresh fa-5 fa-spin"></i> </div> <div ng-show="!layout.loading"> <div class="container-fluid header"> <div class="main-title"> <h1>¿Me la mando o no me la mando?</h1> </div> </div> <div class="container"> <div class="row"> <div class="col-xs-12 col-lg-6 col-lg-offset-3"> <div class="thumbnail img-container"> <img src="../images/user.a50ee50d.png"> </div> </div> </div> <div class="row"> <div class="col-xs-12 col-lg-6 col-lg-offset-3"> <form name="question" novalidate class="question-form" id="qForm" ng-submit="submitQuestion(question)"> <div class="textareaWrapper"> <textarea class="form-control qText" ng-model="question.value">\r\n                    </textarea> <p ng-show="error" class="errorText"><strong><em> ¡Tenés que preguntar algo! </em> </strong> </p> </div> <button class="btn btn-success btnTolo" type="submit">¿Mandarsela?</button> </form> </div> </div> <div class="row answersWrapper"> <div class="col-xs-12 col-lg-6 col-lg-offset-3"> <div class="scrollContainer"> <div class="answersContainer"> <div ng-repeat="toloAnswer in answeredQuestions |  orderBy:\'$index\':true" class="answer"> <div class="qa"> <h4><strong>{{toloAnswer.q}}</strong></h4> <h5><em>{{toloAnswer.a}}</em></h5> </div> </div> </div> </div> </div> </div> </div> </div>')}]);