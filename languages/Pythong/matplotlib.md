#python #dataScience 
creating line plots
    from matplotlib import pyplot as plt
    creating the line plot
    plt.plot(value_x,value_y)
    when you want to show 
        plt.show();
    if you want to show multiple things you just add another plt.plot()
        plt.plot(v1.value_x,v1.value_y);
        plt.plot(v2.value_x,v2.value_y);
        plt.show();

adding text to plots
    if you want just the title 
        plt.title("Ransom Note Letters")
    axes and title labels
        if you want to add the horizontal label
            plt.xlabel('letter');
        and if you want to add the vertical 
            plt.label('frequency');
adding the label you on the plot you can use legends
    plt.plot(aditya.days,
            aditya.cases,
            label="aditya");
    plt.legend()
you can add text with the method .text()
    plt.text(xcoord,ycoord,"Text Message");
if you want to change the fontsize , just add the fontsize tag
    plt.title('titlename',fontsize=20);
if you want to change the color
    plt.title('titlename',color='Green');

adding some style 
    changing line color
        plt.plot(x,y,color="colorName");
    changing line widht
        plt.plot(x,y,linewidth="num");
    changing line style
        plt.plot(x,y,linestyle="-");
        plt.plot(x,y,linestyle="--");
        plt.plot(x,y,linestyle=":");
        plt.plot(x,y,linestyle="-.");
    adding markers
        plt.plot(x,y,marker='x') <- this will have an x on the middle of the line
        plt.plot(x,y,marker='s') <- this will have squares 
        plt.plot(x,y,marker='o') <- this will have circles 
        plt.plot(x,y,marker='d') <- this will have diamond shapes
        plt.plot(x,y,marker='*') <- this will have stars
        plt.plot(x,y,marker='h') <- this will have hexagons
    setting a style 
        plt.style.use('fivethirtyeight')
        plt.style.use('ggplot')
        plt.style.use('seaborn')
        plt.style.use('default')
    changing a transparency
        plt.plot(x,y,alpha=0.2);
    you can make a grid
        plt.grid(True)
making scatter plot
    they are unordered points
        plt.scatter(x,y)
        plt.show();

making bar charts 
    making a vertical bar 
        plt.bar(x,y);
        plt.show();
    making a horizontal bar 
        plt.barh(x,y);
        plt.show();
    you can add error margins
        plt.bar(x,y,yerr='df.error');
    you can stack two bars
        plt.bar(x,y,bottom=x)

making a histogram
    plt.hist(dataset);
    plt.show();
if you want to divise and have more accurate data
    plt.hist(data,bins=num);
if you want to zoom in , use range,
    plt.hist(data,range(min,max));
if you dont care about the absolute number, you can use percentages by using 
    plt.hist(data, density= true);

sizes
    you can change the size based on the value, the bigger the value the bigger the size
        plt.scatter(gdp_cap, life_exp, s=np_pop)
    