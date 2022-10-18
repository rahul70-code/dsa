// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

void printArray(int arr[], int size) {
   for (int i = 0; i < size; i++)
   cout << arr[i] << " ";
   cout << endl;
}

void printS(int idx, vector<int> &ds, int s, int sum, int arr[], int n){
    if(idx == n) {
        if(s == sum){
            for(auto at : ds) cout << at << " ";
            cout << endl;
        }
        return;
    }
    ds.push_back(arr[idx]);
    s+= arr[idx];
    printS(idx+1, ds, s, sum, arr, n);
    s-=arr[idx];
    ds.pop_back();
    printS(idx+1, ds, s, sum, arr, n);
}

int main() {
    int arr[] = {1,2,1};
    int n = 3;
    int sum = 2;
    vector<int> ds;
    printS(0, ds, 0, sum, arr, n);
    return 0;
}

