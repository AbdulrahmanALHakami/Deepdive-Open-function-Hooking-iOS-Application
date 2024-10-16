This guide provides How you can Hooking the Open() function that your Application On macOS/iOS calling and how you can Check if some apps access to sensitive Data or Directory's 


attantion:
if you use macOS you need to disable the SIP for this test to allow your System debugging 
if you use iOS you need to jailbreaking your Phone 



Deep Dive Into Process Hooking;

Process hooking is a powerful technique that allows developers or security researchers to intercept and modify the behavior of system calls or functions within an application. This technique is useful for monitoring or altering how applications interact with system resources, such as files or directories


macOS/iOS, hooking the open() function can help you detect when an application is trying to access sensitive files or directories. By capturing and analyzing this behavior, you can ensure that no unauthorized access to sensitive data is happening

Setup the Environment

On macOS, ensure that SIP is disabled by booting into recovery mode and using the terminal command csrutil disable.
On iOS, ensure your device is jailbroken to enable system-level function hooks.

Frida: A dynamic FrameWork allow us to Inject or Hook into running applications 

setup frida on macOS :

'pip3 install frida-tools'

setup frida-server on iOS

go to any Package manager include  Sileo or Cydia or zebra 
and open the Source then you see icon like (+) press it then add:

"https://build.frida.re"

in iOS terminal :

sudo apt install frida-server 

then run it by type this command:

"frida-server" 


Now Lets Start  Pentest


on your computer type;
connect your iPhone by USB Cable then Trust it 

in the CMD or Terminal Type;
 
frida-ps -Uai

this command will show us all the process inside our Phone choose your application Targer Process 

and make Intercepet JavaScript code to Hook the Open() Function

for the Java Script Code take a look into OpenHook.js in this guide

after that in the terminal:

frida -U -p your-target-app -l OpenHook.js

you see now every Open() function thats your App try to open your files 

now you will see if some Apps Try to get access to the sensitive


Have a fun Hacking 

Abdulrahman AL-Hakami@d7xsa 




 
