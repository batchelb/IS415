var viz, workbook, activeSheet;

window.addEventListener('resize', resizeViz);
function resizeViz() {
    console.log('resizeViz running')
    var width = document.getElementById('vizContainer').clientWidth;
    var height = document.getElementById('vizContainer').clientHeight;
    console.log('width: ' + width + '\nheight: '+ height)
    viz.setFrameSize(width, height);
}


function initViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "https://public.tableau.com/views/BoldAppsandLocations/Dashboard1?:embed=y&:display_count=yes";
  var windowWidth = document.getElementById('vizContainer').clientWidth
  var windowHeight = document.getElementById('vizContainer').clientHeight
  var options = {
    // width: 900,
    width: windowWidth,
    height: 700,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
      listenToMarksSelection();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}

/****************************************
    FILTER PRACTICE
****************************************/

// function filterAppGenres(genre){
//     console.log("filterAppGenres("+genre+") running")
//     console.log(activeSheet)
//     activeSheet.applyFilterAsync(
//         "Primary Genre",
//         genre,
//         tableau.FilterUpdateType.REPLACE);
// }
