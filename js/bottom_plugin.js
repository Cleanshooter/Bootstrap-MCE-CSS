(function() {
    tinymce.create('tinymce.plugins.bmcbottom', {
        init : function(ed, url) {
        
            ed.addButton('bmcbottom', {
                title : 'Goto Bottom',
                cmd : 'gotoBottom',
                image : url+'/icons/bottom.png'
            });
            ed.addCommand('gotoBottom', function(){
            	var content = ed.getContent();
            	ed.execCommand('mceSetContent', 0, content + "<span id='bottom'>&nbsp;</span>");
            	var node = ed.dom.select('#bottom')
            	ed.focus();
            	ed.selection.select(node[0]);
            	ed.selection.collapse(0);
            	ed.dom.setAttrib('bottom', 'id', '');
            });
            
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    tinymce.PluginManager.add('bmcbottom', tinymce.plugins.bmcbottom);
})();