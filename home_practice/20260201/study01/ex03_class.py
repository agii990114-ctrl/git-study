class FourCal():

    def __init__(self,first, second):
        self.first = first
        self.second = second
    def add(self):
        result = self.first + self.second
        return(result)
    
a = FourCal(4,6)

print(a.add())

class Five(FourCal):
    def add(self):
        return self.first - self.second


b=Five(5,4)
print(b.add())