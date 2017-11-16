##OneTrueForm

###Basic Usage

####CSS
Link to external css:
```html
<link rel="stylesheet" href="css/onetrueform.css">     
```

Optional: Project specific css can be added to a provide file to keep the main CSS form clean:
```html
<link rel="stylesheet" href="css/onetrueform-custom.css">     
```

####Markup
```html
<div id="oneTrueForm" class="[vertical/horizontal] [no-content]">
	<div class="content">
	    <div class="section">
	        Content Area
	    </div>
	</div>
	<div class="form">
	    <div class="section-container">
	        <div class="section">
	            <h3>Section 1</h3>
	        </div>
	    </div>
	    <div class="section-container">
	        <div class="section">
	            <h3>Section 2</h3>
	        </div>
	    </div>
	    <div class="section-container">
	        <div class="section">
	            <h3>Section 3</h3>
	        </div>
	    </div>
	</div>
</div>
```

##### Customization with Classes

```html
<div id="oneTrueForm" class="[vertical/horizontal] [no-content]">
```

###### Required Vertical or Horizontal Class
Either `.vertical` or `.horizontal` is required and specifies if a vertical or horiztonal layout will be used.

###### Optional No Content Class
Optionally a `.no-content` class may be added. This adjusts the layout to account for an implementation without a content area. If this flag is used it is reccomended you do not include the `.content` div, however, if a `.content` div  is present this class will force it to be hidden

#### General Layout

##### Vertical Layout
Window Width Greater than 768px
- OneTrueForm Container: 100% of parent
	- Left (form) column: 33% of parent
	- Right (content) column: 66% of parent

Window Width Less than 768px (tablet to mobile)
- OneTrueForm Container: 100% of parent
	- Top (content) column: 100% of parent
	- Bottom (form) column: 100% of parent

##### Vertical Layout without Content
Window Width Greater than 768px
- OneTrueForm Container: 33% of parent
	- Left (form) column: 100% of parent


Window Width Less than 768px (tablet to mobile)
- OneTrueForm Container: 100% of parent
	- Left (form) column: 100% of parent

##### Horiztonal Layout
Window Width Greater than 768px
- OneTrueForm Container: 100% of parent
	- Top (content) column: 100% of parent
	- Bottom (form) column: 100% of parent

Window Width Less than 768px (tablet to mobile)
- OneTrueForm Container: 100% of parent
	- Top (content) column: 100% of parent
	- Bottom (form) column: 100% of parent

### Advanced Usage

#### SASS Variables

```sass
$breakpoint-tablet: 768px;
```
Breakpoint for tablet down to mobile views


```sass
$vertical-form-width: 33%;
```
Releavant to vertical forms only. This is the width of form section for vertical form. Content width is calculated from this.
If `.no-content` class is used the entire `oneTrueForm` container will become with width.
