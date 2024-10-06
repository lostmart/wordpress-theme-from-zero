# WordPress Theme - Custom Photo Gallery

This is a custom WordPress theme built from scratch, designed to create a dynamic photo gallery website. It leverages Custom Post Types (CPT), Advanced Custom Fields (ACF), and custom taxonomies to provide a flexible and user-friendly experience. Additionally, it features an interactive photo filter and a dynamic lightbox, enhancing the overall user experience.

## Features

### 1. Custom Post Type and Taxonomies

- Custom Post Type: "photo" created using CPT UI.
- Custom Taxonomies:
  - Catégorie: Categorizes photos into different groups.
  - Format: Specifies the format of the photos.
- Custom Fields: Created using ACF.
- Type: A custom field to specify the type of photo.
- Référence: A custom field to provide a reference code for each photo.

### 2. Dynamic Filtering with Fetch API

- The theme uses the Fetch API to asynchronously retrieve taxonomies from WordPress using WP_Query().
- Allows for dynamic filtering of photos on the page without requiring a page refresh, providing a seamless user experience.

### 3. Lightbox Gallery

- A lightbox is included to display photos dynamically.
- Updates based on the applied photo filters, allowing users to easily view and navigate through filtered photo selections.

### 4. Contact Modal

- A contact form is available through a modal that can be triggered on the page.
- Enhances user interaction, providing a direct way to contact the site owner or manager.

## Installation

- Clone the Repository

```bass
git clone https://github.com/lostmart/wordpress-theme-from-zero
```

- Upload the Theme

  - Compress the theme folder into a .zip file.
  - Upload it to your WordPress site through the Appearance > Themes > Add New section.

- Activate the Theme

  - Once uploaded, activate the theme in the WordPress dashboard.

- Install Required Plugins

  - Install and activate the following plugins for the theme to work correctly:

  - CPT UI
  - ACF (Advanced Custom Fields)

- Set up the custom post type, taxonomies, and fields using these plugins.

### Usage

#### Custom Post Type & Taxonomies

- The theme automatically registers the "photo" custom post type and its associated taxonomies ("catégorie" and "format").
- You can create new "photo" posts via the WordPress dashboard, assign categories, formats, and fill in the custom fields ("type" and "référence").

#### Dynamic Filtering

- The filtering feature is implemented using the Fetch API and WP_Query() in WordPress.
- The theme dynamically updates the displayed photos based on the selected filters on the front end, offering a smooth, interactive experience.

#### Lightbox Gallery

- The theme includes a lightbox feature to display photos in an enhanced view.
- The lightbox updates dynamically based on the filter applied on the page.

#### Contact Modal

- A contact form modal is available and can be triggered on the page.
- It can be configured through the WordPress dashboard.

### Development

- The dynamic photo filtering uses asynchronous JavaScript (Fetch API) to retrieve taxonomies via WordPress's WP_Query().
- The theme includes the necessary JavaScript code to handle this fetching and update the page content in real-time.

### Custom Styles and Scripts

- The theme includes custom styles and scripts to enhance the front-end display and functionality.
- If you wish to modify these, locate the corresponding CSS and JavaScript files in the theme's /assets folder.

### Credits

- CPT UI for managing custom post types and taxonomies.
- ACF (Advanced Custom Fields) for handling custom fields within the theme.
