#php 
folder strucure
     assets 
          special classes that resposable for registering javascript and css files inside the view 
     commands 
          console application comments 
     config 
          configuration files 
     controllers 
          main folder, controllers have action that are responsible for rendering the view 
     runtime
          framework generated files 
     vagrant   
          run framework on vagrant container system 
     views 
          the views are here 
     web 
          contains the content 
     widgets 
          user interface 
     
run application     
     php yii serve --port=2222;

creating a page 
     yii uses the mvc format, so you need to go to sitecontroller.php and add an action   
          this action has to be the filename that you added on the views/site folder 
               public funciton actionSay () {
                    return $this->render('filename');
               }
          
working with forms 
     creating a model 
          represent the data entered by a user through a form, in the modes/form.php 
               {
                    namespace app\models;
                    use Yii;
                    use yii\base\Model; 
                    class EntryForm extends Model {
                         public $name;
                         public $email;

                         public function rules() {
                              return [
                                   ['name','email'],'required'],
                                   ['email','email'],
                              ]
                         }
                    }
               }
     it contains two public members, name and email
     creating an action 
     create an entry action in the site controller that will use the new model
          {
               <?php 
               namespace app\controllers;
               use Yii;
               use yii\models\EntryForm;
               class SiteController extends Controller {
                    ...
               public function actionEntry() {
                    $model = new EntryForm();
                    if ($model->load(Yii::$app->request->post()) && $model->validate()) {
                         return $this->render('entry-confirm',['model' => $model]);
                    }
                    return $this->render('entry',['model' => $model]);
               }
               }
          }
          if everything is fine, the action will render a view named entry0confirm to confirm the successful submission of the data to the user 
          creating views 
               create two views named entry-confirm and entry 
               entry-confirm displayis the name and email data, should be stored in the file views /site/entry-confirm.php;
                    {
                         <?php 
                              use yii\helpers\Html; ?>
                              <p>you have entered the following information </p>
                              <ul>
                              <li> name : <?= Html::encode($model->name) ?></li>
                              <li> email: <?= Html::encode($model->email)?></li>
                              </ul>
                    }