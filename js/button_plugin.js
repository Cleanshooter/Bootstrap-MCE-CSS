(function() {
    tinymce.create('tinymce.plugins.bmcbutton', {
        init : function(ed, url) {
        
            ed.addButton('bmcbutton', {
                title : 'Button',
                image : url+'/icons/button.png',
                onclick : function() {
                	ed.windowManager.open({
                		title: 'Add Button',
                    	file : url + '/button-dialog.html',
                    	width : 450 + parseInt(ed.getLang('example.delta_width', 0)),
                    	height : 180 + parseInt(ed.getLang('example.delta_height', 0)),
                    	inline : 1
    	            }, {});
        	    }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    tinymce.PluginManager.add('bmcbutton', tinymce.plugins.bmcbutton);
})();