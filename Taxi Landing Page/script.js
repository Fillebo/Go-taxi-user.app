window.addEventListener('hashchange', function() {
    
    var pageName = window.location.hash.substr(1);

   
    loadPage(pageName);
  });

  function loadPage(pageName) {
   
    var pageMappings = {
      services: 'component/services.html',
      technology: 'component/technology.html',
      who_we_serve: 'component/who_we_serve.html',
      pricing: 'component/pricing.html',
    };
    

    var pageUrl = pageMappings[pageName] || 'default.html'; 


    fetch(pageUrl)
      .then(response => response.text())
      .then(html => {
        document.querySelector('.container').innerHTML = html;
      })
      .catch(error => {
        console.error('Failed to load the page:', error);
      });
  }


  if(window.location.hash) {
  
    loadPage(window.location.hash.substr(1));
  }