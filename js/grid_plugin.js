(function() {
    tinymce.create('tinymce.plugins.bmcgrid', {
        init : function(ed, url) {
        
            ed.addButton('bmcgrid', {
                title : 'Grid Column',
                cmd : 'addGrid',
                image : url+'/icons/grid.png'
            });
            ed.addCommand('addGrid', function(){
            	var number = prompt("How many columns you want? (2, 3, 4, 6)"), content, column;
                if (number !== null) {
                    number = parseInt(number);
                    if (number >= 2 && number <= 6 && number != 5) {
                    	column = 12 / number;
                        content = '<div class="row">';
                        for(var i = 1; i <= number; i++){
                        	content += '<div class="col-md-' + column + '"><span> Place content for column ' + i + ' here. </span></div>';
                        }
                        content += '</div><span>&nbsp;</span>';
                        ed.execCommand('mceInsertContent', 0, content);
                    }
                    else {
                        alert("The number value is invalid. We only support 2, 3, 4, or 6 column layouts.");
                    }
                }
            });
            
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    tinymce.PluginManager.add('bmcgrid', tinymce.plugins.bmcgrid);
})();