var logData="";
logClear();

function publishFlasWin(flaDirectory, outDirectory, reportDirectory){
    var flaDirectoryUri=FLfile.platformPathToURI(flaDirectory); 
    var outDirectoryUri=FLfile.platformPathToURI(outDirectory); 
    var reportDirectoryUri=FLfile.platformPathToURI(reportDirectory); 
                            
  	publishFlas(flaDirectoryUri, outDirectoryUri, reportDirectoryUri);     	
}

function publishFlas(flaDirectoryUri, outDirectoryUri, reportDirectoryUri){
    log("Start publishing");

    publish(flaDirectoryUri);
    moveToOut(flaDirectoryUri, outDirectoryUri);
    
    log("Publish complete");
    
    logSave(reportDirectoryUri);
}

function logClear(){
    logData="";
}

function log(message){
    logData+=getNowString()+"\t"+message+"\n";
}

function logSave(reportDirectoryUri){
	if(!FLfile.exists(reportDirectoryUri))
		FLfile.createFolder(reportDirectoryUri)
		
    var fileUri=reportDirectoryUri+"flaPublish.log";
    
     if(FLfile.exists(fileUri))
            FLfile.remove(fileUri);
            
     FLfile.write(fileUri, logData)
}

function getNowString(){
    var date=new Date();
    
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"."+date.getMilliseconds();
 }

function publish(flaDirectoryUri){

    var files = FLfile.listFolder(flaDirectoryUri + "/*.fla", "files"); 
    
    for (file in files) {
        var curFile = files[file];
        var success=fl.publishDocument(flaDirectoryUri+curFile);
        
        log("Publis file "+curFile+" is " + success);
    }
}

function moveToOut(fromDirectoryUri, toDirectoryUri){
    var files = FLfile.listFolder(fromDirectoryUri + "/*.swc", "files"); 
        
    for (file in files) {
        var curFile = files[file];
        
        if(FLfile.exists(toDirectoryUri+curFile))
            FLfile.remove(toDirectoryUri+curFile);
        
        FLfile.copy(fromDirectoryUri+curFile, toDirectoryUri+curFile);
        FLfile.remove(fromDirectoryUri+curFile);
    }
}

/* Usage like this:
    
publishFlasWin("d:\\Projects\\GradleFlexTest\\src\\main\\fla\\", 
            "d:\\Projects\\GradleFlexTest\\build\\libs\\",
            "d:\\Projects\\GradleFlexTest\\build\\reports\\");    

or like this

publishFlas("file:///d|/Projects/GradleFlexTest/src/main/fla/", 
            "file:///d|/Projects/GradleFlexTest/build/libs/",
            "file:///d|/Projects/GradleFlexTest/build/reports/"); 

*/

