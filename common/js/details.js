	function supports_details(){
		return('open' in document.createElement('details'));
	}
	function details() {
		$('details').each(function(i){
			var $details=$(this);
			var $summary=$('summary',$details).first();
			$details.attr('role','group');
			if(!$details.attr('id')){
				$details.attr('id','details-'+i);
			}
			var isOpen=$details.prop('open');
			if(typeof isOpen==='undefined'){
				isOpen=false;
			}
			$summary.attr({
				'role':'button',
				'aria-controls':$details.attr('id'),
				'aria-expanded':isOpen
			}).click(function(){
				if($details.attr('open')){
					$summary.attr('aria-expanded',false);
				} else {
					$summary.attr('aria-expanded',true);
				}
			});
			if(!supports_details()){
				$details.addClass('no-details');
				$summary.attr('tabindex',0).keypress(function(event){
					if(event.which==13||event.which==32){
						$summary.click();
					}
				}).click(function(){
					if($details.attr('open')){
						$details.removeAttr('open');
					} else {
						$details.attr('open','open');
					}
				});
			}}
		);
	}

