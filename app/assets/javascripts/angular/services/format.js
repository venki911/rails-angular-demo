Application.factory('Format', ['$sce', function($sce){
  return {
    parseDate: function(date) {
      return moment(date).fromNow();
    },

    parseMarkdown: function(markdown) {
      return $sce.trustAsHtml(marked(markdown));
    }
  }
}]);