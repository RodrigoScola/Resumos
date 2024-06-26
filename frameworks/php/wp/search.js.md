#wordpress 
```js
import $ from "jquery"
class Search {
	constructor() {
		this.displaySearchHtml()
		this.openButton = $(".js-search-trigger")
		this.closeButton = $(".search-overlay__close")
		this.searchOverlay = $(".search-overlay")
		this.searchTerm = $("#search-term")
		this.isOpen = false
		this.typingTimer
		this.isLoading = false
		this.prevValue
		this.results = $("#search-overlay__results")
		this.events()
	}
	events() {
		this.openButton.on("click", this.openOverlay.bind(this))
		this.closeButton.on("click", this.closeOverlay.bind(this))
		$(document).on("keydown", this.keyPressDispatch.bind(this))
		this.searchTerm.on("keyup", this.typingLogic.bind(this))
	}
	typingLogic() {
		if (this.prevValue == this.searchTerm.val()) return
		clearTimeout(this.typingTimer)
		if (this.searchTerm.val()) {
			if (!this.isLoading) {
				this.results.html('<div class="spinner-loader"></div>')
				this.isLoading = true
			}
			this.typingTimer = setTimeout(this.getResults.bind(this), 750)
		} else {
			this.results.html("")
			this.isLoading = false
		}
		this.prevValue = this.searchTerm.val()
	}
	async getResults() {
		$.getJSON(universityData.root_url + `/wp-json/wp/v2/posts?search=${this.prevValue}`, (posts) => {
			this.results.html(`
			<h2 class='search-overlay__section-title'>General Results</h2>
			
			${posts.length ? "<ul class='link-list min-list'>" : "<p>No general information found</p>"}
				${posts.map((value) => {
					console.log(value)
					return `<li><a href="${value.link}">${value.title.rendered}</a></li>`
				})}
			${posts.length > 0 ? "</ul>" : ""}
			`)
			this.isLoading = false
		})
	}
	keyPressDispatch({ keyCode }) {
		if (keyCode == 83 && !this.isOpen && !$("input, textarea").is(":focus")) {
			this.openOverlay()
		}
		if (keyCode == 27 && this.isOpen) {
			this.closeOverlay()
		}
	}
	openOverlay() {
		this.searchOverlay.addClass("search-overlay--active")
		$("body").addClass("body-no-scroll")
		this.searchTerm.val("")
		setTimeout(() => this.searchTerm.focus(), 201)
		this.isOpen = true
	}
	closeOverlay() {
		if (!this.searchOverlay.hasClass("search-overlay--active")) return
		this.searchOverlay.removeClass("search-overlay--active")
		$("body").removeClass("body-no-scroll")
		this.isOpen = false
	}
	displaySearchHtml() {
		$("body").append(`
		<div class="search-overlay">
			<div class="search-overlay__top">
				<div class='container'>
					<i class='fa fa-search search-overlay__icon' aria-hidden="true"></i>
					<input type='text' class='search-term' placeholder="what are you looking for?" id='search-term' />
					<i class='fa fa-window-close search-overlay__close' aria-hidden="true"></i>
				</div>
			</div>
		<div class="container">
		<div id='search-overlay__results'></div>
		</div>
		`)
	}
}
export default Search
```