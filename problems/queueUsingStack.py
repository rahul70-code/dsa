#! python3

# By making enQueue operation costly
# push operation - O(N), pop operation - O(1)
class Queue1:
    def __init__(self):
        self.s1 = []
        self.s2 = []
    
    def enQueue(self, x):

        while len(self.s1) !=0:
            self.s2.append(self.s1[-1])
            self.s1.pop()
    
        self.s1.append(x)

        while len(self.s2) !=0:
            self.s1.append(self.s2[-1])
            self.s2.pop()

    def deQueue(self):
        if len(self.s1) == 0:
            print("Q is empty")
        
        x = self.s1[-1]
        self.s1.pop()
        return x
    

# By making deQueue operation costly
# push operation - O(1), pop operation - O(N)

class Queue2: 
    def __init__(self):
        self.s1 = []
        self.s2 = []
    
    def enQueue(self, x):
        self.s1.append(x)

    def deQueue(self):
        if len(self.s1) == 0 and len(self.s2) == 0:
            print("Q is empty")
            return
        
        elif len(self.s2) == 0 and len(self.s1) > 0:
            while len(self.s1):
                temp = self.s1.pop()
                self.s2.append(temp)
            return self.s2.pop()
        
        else:
            return self.s2.pop()
        

# modified better approach is using recursion calls 
# recursively pop everything for stack1, store the popped items in var res
# push the res back to stack1 and return res      
    

if __name__ == '__main__':
    q = Queue1()
    q.enQueue(1)
    q.enQueue(33)
    q.enQueue(2)
    q.enQueue(3)
 
    print(q.deQueue())
    print(q.deQueue())
    print(q.deQueue())
    print(q.deQueue())
