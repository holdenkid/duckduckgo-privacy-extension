const Parent = window.DDG.base.Model
const browserUIWrapper = require('./../base/$BROWSER-ui-wrapper.es6.js')

function Search (attrs) {
    Parent.call(this, attrs)
}

Search.prototype = window.$.extend({},
    Parent.prototype,
    {

        modelName: 'search',

        doSearch: function (s) {
            this.searchText = s
            s = encodeURIComponent(s)

            console.log(`doSearch() for ${s}`)

            let url = 'https://duckduckgo.com/?q=' + s

            browserUIWrapper.createBrowserTab(url)
        }
    }
)

module.exports = Search
