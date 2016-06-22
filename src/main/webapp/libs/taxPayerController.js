var taxPayerModule = angular.module("taxPayerModule", []);

taxPayerModule.controller("taxPayerController", function($scope) {

	$scope.taxPayers = [

	]

	$scope.AddTaxPayer = function(data) {
		var xmlDoc = new ActiveXObject("MSXML2.DOMDocument");
		var fileSysObj = new ActiveXObject("Scripting.FileSystemObject");

		var xmlFileName = 'D:\\MyNewWorkspace\\TaxPayerAssignment\\taxPayerDetails.xml';
		var file;
		var name = document.getElementById('name').value;
		var address = document.getElementById('address').value;
		var panNo = document.getElementById('panNo').value;
		var dob = document.getElementById('dob').value;
		var assessmentYear = document.getElementById('assessmentYear').value;
		var income = document.getElementById('income').value;
		var tds = document.getElementById('tds').value;
		var taxDeduction = document.getElementById('taxDeduction').value;

		function createXmlfile() {

			if (fileSysObj.fileExists(xmlFileName)) {
				xmlDoc.load(xmlFileName);
				var lng;
				lng = xmlDoc.getElementsByTagName("Details");

				var xmlFileReadObj = fileSysObj.OpenTextFile(xmlFileName, 1, true, 0);

				var x = xmlFileReadObj.readAll();
				var replace = x.replace('</TaxPayer>', '');

				file = fileSysObj.OpenTextFile(xmlFileName, 2, true);

				file.writeLine(replace);



				file.WriteLine('<Details>');
				file.WriteLine('<Name>' + name + '</Name>');
				file.WriteLine('<Address>' + address + '</Address>');
				file.WriteLine('<PanNo>' + panNo + '</PanNo>');
				file.WriteLine('<DOB>' + dob + '</DOB>');
				file.WriteLine('<AssessmentYear>' + assessmentYear
						+ '</AssessmentYear>');
				file.WriteLine('<Income>' + income + '</Income>');
				file.WriteLine('<TDS>' + tds + '</TDS>');
				file.WriteLine('<TaxDeduction>' + taxDeduction
						+ '</TaxDeduction>');
				file.WriteLine('</Details>');
				file.WriteLine('</TaxPayer>');

			} else {

				file = fileSysObj.CreateTextFile(xmlFileName, true);

				file.WriteLine('<?xml version="1.0" encoding="utf-8" ?>');

				file.WriteLine('<TaxPayer>');
				file.WriteLine('<Details>');

				file.WriteLine('<Name>' + name + '</Name>');
				file.WriteLine('<Address>' + address + '</Address>');
				file.WriteLine('<PanNo>' + panNo + '</PanNo>');
				file.WriteLine('<DOB>' + dob + '</DOB>');
				file.WriteLine('<AssessmentYear>' + assessmentYear
						+ '</AssessmentYear>');
				file.WriteLine('<Income>' + income + '</Income>');
				file.WriteLine('<TDS>' + tds + '</TDS>');
				file.WriteLine('<TaxDeduction>' + taxDeduction
						+ '</TaxDeduction>');
				file.WriteLine('</Details>');
				file.WriteLine('</TaxPayer>');

				alert('File Created');
			}

			file.close();
		}
		createXmlfile();

		$scope.taxPayers.push(data);

		alert('Tax Payer Added');


	}

	$scope.cancel = function() {
		$scope.data = {};
	}

})
