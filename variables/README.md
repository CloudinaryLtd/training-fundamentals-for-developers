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

![use variables to calc x,y position of image](https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_500,$vertical_500,$logowidth_200,w_$horizontal,h_$vertical,c_fit,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_logo-big,c_scale,w_$logowidth,g_north,x_$horizontal_sub_iw_div_2,y_$vertical_sub_ih_div_2/baseball-hat)

#### Final Add a horizontal correction factor because the hat is at an angle in the image
x = $horizontal - initial width / 2 + $horizontal * $correction  
y = $vertical - initial height / 2  


![add a 5% correction on the horizon because hat at an angle](https://res.cloudinary.com/picturecloud7/image/upload/$horizontal_500,$vertical_500,$logowidth_200,$correction_0.05,w_$horizontal,h_$vertical,c_fit,e_replace_color:ffffff:30:111111,dpr_2.0,f_auto,q_auto/l_logo-big,c_scale,w_$logowidth,g_north,x_$horizontal_sub_iw_div_2_add_$horizontal_mul_$correction,y_$vertical_sub_ih_div_2/baseball-hat)




-------------------

