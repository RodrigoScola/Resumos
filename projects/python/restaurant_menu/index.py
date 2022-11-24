class Plate:
     def __init__(self, name, price):
        
          self.__name = name;
          self.__price = price;

     @property
     def name(self):
          return self.__name

     @name.setter
     def name(self, new_name):
          self.__name = new_name
     
     @property
     def price(self):
          return self.__price

     @price.setter
     def price(self, new_price):
          if new_price > 0:
               self.__price = new_price



class Menu:
     def __init__(self, name, start_time, end_time, menu_items):
          self.__name = name;
          self.__start_time = start_time;
          self.end_time = end_time
          self._menu_items = {}

          self.add_menu_items(menu_items)

     def add_menu_items(self, items):
          for item in items:
               if type(item) == Plate:
                    self._menu_items[item.name] = item
               elif type(item) == dict:
                    p = Plate(item['name'], item['price'])
                    self._menu_items[p.name] = p

               else:
                    p = Plate(*item)
                    self._menu_items[p.name] = p







brunch = Menu('brunch',11,16,[
  Plate('pancakes',7.50),
  Plate("waffles",9.0),
  Plate('home fries',4.5),
  Plate('coffee', 1.5),
  Plate('tea', 1),
  Plate('mimosa',10.50),
  Plate('orange juice', 3.5)
  ])



early_bird = Menu('early bird', 3, 18, [
  Plate('salumeria plate',8),
  Plate('salad and breadstics (serves 2, no refills)', 14.00),
  Plate('pizza with quattro formaggi', 9.00),
  Plate('duck ragu',17.50),
  Plate('mushroom raviolli (vegan)', 13.50),
  Plate('coffee',1.5),
  Plate('espresso',3.00)
])

dinner = Menu('dinner',5, 23,[
  Plate('crostini with eggplant caponata',13.00),
  Plate('caesar salad', 16),
  Plate('pizza with quattro formaggi', 11.00),
  Plate('duck ragu',19.50),
  Plate('mushroom raviolli (vegan)', 13.50),
  Plate('Coffee', 2.00),
  Plate('espresso',3.00)
])

kids = Menu('kids',11,21,[
  Plate('chicken nuggets',6.5),
  Plate('fusilli with wild mushrooms',12.00),
  Plate('apple juice', 3.00),
  ['applyt',3],
  {
     "name": 'asdf',
     "price": 3
  }
])

print(kids._menu_items['asdf'])