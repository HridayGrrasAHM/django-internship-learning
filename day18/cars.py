class Cars:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def output(self):
        return f"The car is {self.model} from {self.brand}"