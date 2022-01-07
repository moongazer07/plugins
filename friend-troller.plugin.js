/**
 * @name friend-troller
 * @authorId 565892085178433542
 */

/*@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("It looks like you've deeztakenly tried to run me directly. \\n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else @*/

module.exports = class {
  getName() {
    return 'friend-troller'
  }

  getAuthor() {
    return 'µmoongazer07#1200'
  }

  getVersion() {
    return '1.0.0'
  }

  getDescription() {
    return 'A Better Discord plugin that trolls whenever you or your friends start the Discord client.'
  }

  start() {
    document.getElementsByClassName('app-2rEoOp')[0].style.display = 'none'
    var rickrollspan = document.createElement('span')
    rickrollspan.id = 'rickroll'
    rickrollspan.innerHTML = '<video id="rickroll-video" style="width:100%;height:calc(100vh - 3em);" src="https://moongazer07.zedekhost.com/friend-troller/hello.mp4" controls autoplay></video><br /><div style="text-align:center;"><a href="#" onclick="document.getElementById(\'rickroll\').remove();document.getElementsByClassName(\'app-2rEoOp\')[0].style.display = \'flex\'">Take me back to Discord!</a></div>'
    document.getElementsByClassName('app-1q1i1E')[0].appendChild(rickrollspan)

    var rickrollscript = document.createElement('script')
    rickrollscript.innerText = `document.getElementById('rickroll-video').onended = () => { document.getElementById('rickroll').remove(); document.getElementsByClassName('app-2rEoOp')[0].style.display = 'flex' }`
    document.getElementsByClassName('app-1q1i1E')[0].appendChild(rickrollscript)
  }

  stop() {
    document.getElementById('rickroll')?.remove()
    document.getElementsByClassName('app-2rEoOp')[0].style.display = 'flex'
  }
}
@end
