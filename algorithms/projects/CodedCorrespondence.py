
all_letters = "abcdefghijklmnopqrstuvwxyz"



def decode(original_message, offset = 10):
     message = []
     string_words = original_message.split(' ');
     for word in string_words:
          new_word = []
          for letter in word:
               letter = translate(letter, offset)
               new_word.append(letter)
          message.append("".join(new_word))
     decoded_message = " ".join(message)
     return decoded_message




def translate(letter, offset = 10):
     initial_letter_idx = all_letters.find(letter)
     if initial_letter_idx == -1:
          return letter
     new_offset = (initial_letter_idx + offset) % len(all_letters)
     return all_letters[new_offset]
     
def change_idx(curr_index, newIndex, loop_at = 0):
     if loop_at == 0:
          loop_at = len(all_letters)

     n_idx = (curr_index + newIndex) % loop_at
     return n_idx
     
def encode_vishal(current_message, keyword  ):
     decoded_message = []
     k_idx = 0
     current_message =current_message.split(' ')
     for word in current_message:
          current_word = []
          for letter in word:
               curr_keyword_letter_idx = all_letters.find(keyword[k_idx]);
               curr_letter_idx = all_letters.find(letter)
               n_letter = all_letters[curr_letter_idx - curr_keyword_letter_idx]
               current_word.append(n_letter)
               k_idx = change_idx(k_idx, 1, len(keyword))
          decoded_message.append("".join(current_word))
     return " ".join(decoded_message)

vis = encode_vishal("txm srom vkda gl lzlgzr qpdb? fepb ejac! ubr imn tapludwy mhfbz cza ruxzal wg zztcgcexxch!", "friends");