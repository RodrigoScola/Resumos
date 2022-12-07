# Communicate data science findings

## Best practices

After a data scientist completes an in-depth investigation on some set of data, the results of this investigation need to be converted somehow into a simplified summary for others to observe and undertand, they are usually written as comments to one of the assigned tickets or more often as slides in a presentation that you then verbally discuss in further detail

```python
import numpy as np
import pandas as pd
import seaborn as sns

pd.set_option('colheader_justify', 'center')

tips = sns.load_dataset('tips')

df = tips.head(10)

css = '''
<html>
     <link rel="stylesheet" type='text/css' href="df_tyle.css" />
     <body>
          {table}
     </body>
</html>

'''
# OUTPUT AN HTML FILE
with open('index.html', 'w') as fp:
     fp.write(css.format(table=df.to_html(classes=['dataframe','table'])))
```

### Know your audience

before starting the process of communicating your findings, it is imoprtant to put into perspective who your audience acutally is. 

If you put too much math/statistics into a report or presentation for non technical people, theyre either going to ask you to define things for them or ask for you to clarify upon certain concepts. Hand it over too simplified to a technical audience, they will ask you how you came up with your results

### Structure the sequence of your story

In what sequence you reveal the results of your analysis

How much analytical depth you want to dive into. Highlight only the most important observations you derived from the data through your exploration of it

> The type of observations you want to include is the kind that relates to whatever the ultimate goal for the investigation is.

### Find and pick relevant data

* what are the insights from the data that are necessary to discuss?

* Does it help get your point across or is it just extra fluff you think is neat as a data scientist?

sometimes, additional statistics that help a data scientist to investigate may not be the ideal insights to share with the audience

### Complexity and purpose

> Dont let your visualizations become too noisy. You dont need to show a plot of every single possible combination of correlations for every single variable

Focus only on the features iportant within your dataset to prevent introducing way too much information into your audience. 

Dont try to fit all in one visualization. Sometimes, just split things into different charts

#### <span style='color:blue'>***DONT!***</span>

<img src='https://content.codecademy.com/PRO/paths/data-science/Communicating-Data-Science-Findings/spaghetti.png'>


## Structure of an data analysis report 

The overall structure of a data analysis report is 

1. Introduction

2. Body

3. Conclusion/discussion

4. Appendix/Appendices

#### Audiences

* **Primary audience: Primary collaborator or client**

     Probably will read the Introduction and Maybe the Conclusion to find what you did and what the conclusion are. Skims Through the body.

     Organize the paper around an agenda for a conversation you want to have with this person about what you learned about the data. Provide the main evidence from your analysis in the body

* **Secondary Audience: An executive person**

     Probably only skims the introduction and perhaps the conclusion to find out what you did and what your conclusions are 

     Leave signposts in the introduction, body and conclusion to make it easy for this person to swoop in, find the headlines of your work and conclusions ans swoop back out 

* **Secondary Audience: A technical supervisor**

     reads the body and then examines the appendix for quality control: *How good a job did you do in answering the interesting questions? How efficient were you? Did you reach reasonable conclusions by defensible statistical methods?*

     Make specific cross-references between the body and specific parts of the appendix so that this person can easily find supporting and ancillary material related to each main analysis you report in the body. Add text to the technical material in the appendix so that this person sees how and why you carried out the more detailed work shown int he appendix

#### The data analysis report has two very important features

* Organized in a way that every type of person can have the necessary information easily

* the writing is as unremarkable as possible so that the content is what the reader remembers.

     * Extra sentences, overly formal or flowery pose, or overly casual or overly brief pose

     * Grammatical and spelling errors

     * Placing the data analysis in too broad or too narrow a context for the questions of interest to your primary audience

     * Focusing on process rather than reporting procedures and outcomes

     * Getting bogged in the details so that it present the information

## The outline of an data analysis report

#### Introduction

* Summary of the study and data, any relevant substantive context, background or framing issues

* The "Big questions" answered by your data analyses and summaries of your conclusions about these questions

* Brief outline of remainder of paper

#### Body

They can be organized in several ways such as 

##### Traditional

divide the body into sections like

* Data

* Methods

* Analysis

* Results

similar to those who have written psych research papers. The one problem for data analysis is that the method section sounds like a strech.

Without the results, it can be pretty sterile sounding (says a lot but doesnt communicate anything). Should merge methods into analysis section

##### Question oriented

single body section, usually called "analysis", and there is a subsection for each question raised in the introduction

###### Example

2. Analysis

     2.1. Success Rate
          
     Methods
     analysis
     conclusions

     2.2. Time to relapse

     Methods
     analysis
     conclusions


#### Conclusion

reprise the questions and conclusions of the introduction, augmented by some additional observatios or details from the analysis section. New question, future work, etc

#### Appendix

Technical descriptions of statistical procedures

Detailed tables or computer output

Figures that were not central to the arguments presented in the body of the report 

computer code used to obtain results


## Audience Analysis 

##### Types of audiences

* **Experts** - People who know the theory and the product inside and out. 

* **Technicians** - People who build, operate, maintain and repair the stuff that the experts design and theorize about

* **Executives** - Make business, economic, administrative, legal, governmental, political decisions on the stuff that the experts and techicians work with.

* **Nonspecialists** - Least technical knowledge of all. Want to learn more about it to vote on it in the upcoming election. but not for much more

##### Audience analysis 

* **Background** - knowlegde experience, training

* **Needs and interests** - What does your audience wants

* **Different Cultures** - Be aware that people with other cultures might not understand the expressions you use

* **Other demographic characteristics** - age groups, type of residence, gender...
