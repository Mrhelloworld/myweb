(function ($) {
    $.fn.Select = function (config) {
        var me = this;
        AddOption(config, me);
    }

    function AddOption(config, target) {
        if (config) {
            var ptype;
            if (config.dtype) {
                ptype = config.dtype;
            }
            else {
                ptype = "text";
            }
            try {
                if (config.url) {
                    $.ajax({
                        type: "POST",
                        url: config.url,
                        dataType: ptype,
                        data: config.param || {},
                        success: function (rs) {
                            var result;
                            if (ptype == "text") {
                                result = $.parseJSON(rs);
                            } else {
                            	result = rs;
                            }
                            if (result) {
								$(target).append("<option value='' selected='selected'>请选择</option>");
								for (var i = 0; i < result.length; i++) {
                                	$(target).append("<option value='" + result[i].value + "'>" + result[i].text + "</option>");
                                }
                            }
                            if(config.value) {
								$(target).val(config.value);
                            }
                        }
                    });
                } else if (config.data) {

                }
            } catch (e) {

            }
            finally {

            }
        }
    }
})(jQuery)