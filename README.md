BOD Briefing for IBM
====================


This is the BOD Briefing project.

VIEW
----
These can be viewed directly in the browser by opening the **index.html**
file.

To be able to work on the files go through the following:


SETUP
-----
You will need node, sass and grunt installed to work on these files.

I recommend installing homebrew on the mac as it gives you access to
many different applications.

open your terminal and paste the following command in to download it

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Once installed you can then install node and grunt by pasting
the following lines into terminal:

```
brew install node
brew install grunt
```
Last install sass using the following:

```
gem install sass
```

Once everything is installed use the terminal to go into the
project folder and run the following, from you guessed it,
in the terminal:

```
grunt
```


CONVENTIONS
-----------

### General
Names use underscores over hyphen.

### Class names
*  **Don't style IDs** Because IDs rank more than
  Classes they can override styles in ways that can
  only be solved by adding more IDs or using !important.
  Don't do either, just break down the problem styles
  into a shorter path. This is explained below.

*   **Don't use !important** If you need to use !important
  because the other styles cannot override the

*  **Names should be descriptive**. Avoid using numbers
   or generic sounding names such as **.element1** or
  **.button3**. Use **.sidebar_menu_holder.** or
  **.button_page_name**. Start with the generic to the
  specific. Such as:

  ```
  .carousel
  .carousel_slide
  .carousel_slide_title
  .carousel_slide_message
  ```

  These show their relationship to each other.

  Use sass to build those class names. The following sass   will build those classnames.

  ```
  .carousel {
    style:value;

    &_slide{
      style:value;

      &_title {
        style:value;
      }

      &_message {
        style:value;
      }
    }
  }

  ```
*  **Classes should be no more than 3 levels deep**
  Classes that get too complicated become harder to debug
  and can cause issues. Think about elements of the page as blocks
  and divide up the styles based on the blocks. Let's look at the following:

  ```
  <div class="content">
    <div class="header">
      <div class="logo"><img src="#" alt=""></div>
      <div class="subheading">Learn more about this site</div>
      <div class="nav">
        <a href="#" class="button_home">Home</a>
        <a href="#" class="button_about">About</a>
        <a href="#" class="button_contact">contact</a>
        <a href="#" class="button_gallery">gallery</a>
        <a href="#" class="button_store">store</a>
      </div>
    </div>
  </div>

  ```

  The wrong way to this this is:

  ```
  .content .header .nav .button_home {

  }
    ```
  This can cause problems down the road when you need to
  just change .button_home. The extra levels means that
  you'll have to add as many levels to any changes. This
  is hard to read and causes lots of extra code to be
  required for simple changes.

  The first step to fixing this is to think of it as blocks.
  In the example the structure could be thought of three
  separate blocks. A content block a header block and a nav block.

  ```
  .content {

  }

  .header {
    .logo {

    }
    .subheading {

    }
  }

  .nav {
    [class*='button_'] {
    }
  }
  ```

  This way there are less levels to the classes. This results
  in two to three levels.

Get placeholder images by editing the size and text then pasting this in the browser.

https://placeholdit.imgix.net/~text?txtsize=36&txt=[image]&w=388&h=288
# IBM-Board-of-Directors-App-Prototype
