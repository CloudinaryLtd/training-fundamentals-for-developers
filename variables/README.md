# Variables

replace black with white
and center the logo overlay

### Start

#### Black baseball cap with transparent background
![start black hat](https://res.cloudinary.com/picturecloud7/image/upload//baseball-hat.png)

#### Make the cap white and auto everything and high res
![make it white](https://res.cloudinary.com/picturecloud7/image/upload/e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/baseball-hat)

#### Add variable for height and width and apply to baseball had
![height and width through variables](https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_500,$vertical_500,h_$vertical,w_$horizontal,c_fit,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/baseball-hat)

#### Add a logo overlay and use (default) g_center (gravity center) 
provide a variable for the width of the logo

![add over lay centered on image](https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_500,$vertical_500,$logowidth_200,w_$horizontal,h_$vertical,c_fit,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_logo-big,c_scale,w_$logowidth,g_center,f_auto,q_auto/baseball-hat)

#### Use vertical/horizontal variables to calculate position instead of g_center
placement of logo (essentially centered like default):
x = $horizontal - initial width / 2  
y = $vertical - initial height  / 2  

if inital dim of the baseball cap =  1024 x 843
x = (500 - 1024)/2 = -262
y = (500 - 843)/2 = -171.5

![use variables to calc x,y position of image](https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_500,$vertical_500,$logowidth_200,w_$horizontal,h_$vertical,c_fit,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_logo-big,c_scale,w_$logowidth,g_north,x_$horizontal_sub_iw_div_2,y_$vertical_sub_ih_div_2/baseball-hat)  

iw in the overlay = initial width of the baseball cap   
ih in the overlay = initial height of the baseball cap


#### Final Add a horizontal correction factor because the hat is at an angle in the image
x = $horizontal - initial width / 2 + $horizontal * $correction  
y = $vertical - initial height / 2  

new x = (500 - 1024)/2 + (500 * .05) = -237  

![add a 5% correction on the horizon because hat at an angle](https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_500,$vertical_500,$logowidth_200,$correction_0.05,w_$horizontal,h_$vertical,c_fit,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_logo-big,c_scale,w_$logowidth,g_north,x_$horizontal_sub_iw_div_2_add_$horizontal_mul_$correction,y_$vertical_sub_ih_div_2/baseball-hat)


--------------
https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_400,$vertical_400,$name_!XXXXX!/w_$horizontal,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_text:Arial_80_black_bold:$(name),g_center/baseball-hat

https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_500,$vertical_500,$name_!XXXXX!/w_$horizontal,h_$vertical,c_scale,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_logo-big,c_scale,w_200,g_north,x_$horizontal_sub_iw_div_2,y_$vertical_sub_ih_div_2/baseball-hat

https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_400,$vertical_400,$name_!XXXXX!/w_$horizontal,h_$vertical,c_scale,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_logo-big,c_scale,w_160,g_north,x_$horizontal_sub_iw_div_2,y_$vertical_sub_ih_div_2/baseball-hat

https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_400,$vertical_400,$name_!XXXXX!/w_$horizontal,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_text:Arial_80_black_bold:$(name),g_center/baseball-hat

-----

https://res.cloudinary.com/picturecloud7/image/upload/$test_150,$horizontal_500,$vertical_500,$logoheight_200,$logowidth_200,f_auto,q_auto/w_500/l_logo-big,c_scale,w_200,g_north,x_$horizontal_sub_iw_div_2,y_$vertical_sub_iw_div_2/e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/baseball-hat.png

https://res.cloudinary.com/picturecloud7/image/upload/$test_-50,$horizontal_500,$vertical_500,$logoheight_160,$logowidth_200,f_auto,q_auto/w_500,c_fit/l_logo-big,c_fit,w_$logoheight,g_north,y_$vertical_mul_0.1/e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/baseball-hat.png

https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_400,$vertical_400,$logoheight_200,$logowidth_200,f_auto,q_auto/w_400,c_fit/l_logo-big,c_fit,w_$logowidth,g_north,y_$vertical_mul_0.1/e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/baseball-hat.png


https://res.cloudinary.com/maribelmullins/image/upload/$horizontal_568,$vertical_824,f_auto,q_auto,$name_!MSM!/l_text:Mr%20De%20Haviland_80_bold:$(name),g_north,x_$horizontal_sub_iw_div_2,y_$vertical/w_500,dpr_2.0,f_auto,q_auto/Towel.jpg

https://res.cloudinary.com/maribelmullins/image/upload/$horizontal_568,$vertical_824,f_auto,q_auto,$name_!MSM!/l_text:Mr%20De%20Haviland_80_bold:$(name),g_north,x_$horizontal_sub_iw_div_2,y_$vertical/w_200,dpr_2.0,f_auto,q_auto/Towel.jpg

-------------------

