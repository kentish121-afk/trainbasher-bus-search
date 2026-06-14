=== TrainBasher Bus Search ===
Contributors: kentish121-afk, Grok
Tags: bus, photography, search, filter, archive, sightings
Requires at least: 6.0
Tested up to: 6.8
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Advanced searchable database for bus photography sightings. Powerful filters, migration tool, and structured data.

== Description ==

The Bus Search Pro plugin turns your large collection of bus photography posts into a fast, filterable, and user-friendly database.

Perfect for bus enthusiasts and photographers who want to quickly find specific vehicles by registration, fleet number, operator, or date.

== Features ==

* Structured post meta for Operator, Fleet Number, Registration, Spotted Date, and Location
* AJAX-powered public search form with multiple filters
* One-click Migration Tool that parses existing post titles
* Meta box in the post editor for easy data entry
* Shortcode `[trainbasher_bus_search]`
* Automatically shows related sightings of the same bus
* Clean, responsive design

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/trainbasher-bus-search` directory, or install via the WordPress plugin screen.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Go to **Settings → TrainBasher Search** and run the Migration tool (recommended).
4. Create a page and add the shortcode `[trainbasher_bus_search]`.

== Frequently Asked Questions ==

= How does the migration tool work? =

It scans your existing published posts and uses smart pattern matching to extract bus details from common title formats (e.g. "Operator · Fleet Reg · Date").

= Can I use this with my existing categories? =

Yes. The plugin works alongside your current category structure.

== Changelog ==

= 1.0.0 =
* Initial release
* Migration tool with batch processing
* AJAX search form
* Editor meta box
* Related sightings on single posts

== Upgrade Notice ==

= 1.0.0 =
Initial public release. Run the migration tool after activation for best results on existing archives.