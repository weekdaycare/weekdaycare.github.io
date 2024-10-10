utils.jq(() => {
	$(function () {
	  const els = document.getElementsByClassName('ds-webinfo');
	  for (var i = 0; i < els.length; i++) {
		const el = els[i];
		const time = el.getAttribute('datetime');
		const version = el.hasAttribute('version');
		if (time) {
			const diffDate = util.diffDate(time, false);
			$(el).prepend(diffDate);
		}
		if (version) {
			const versionInfo = localStorage.getItem('lastVersion') || 'NULL';
			$(el).append(versionInfo);
		}
	  }
	});
  });