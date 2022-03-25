// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

void reverseArray(int arr[], int start, int end) {
    while(start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}

void reverseRecursion2(int arr[], int start, int n) {
    if(start >= n/2) return;
    swap(arr[start],arr[n-start-1]);
    return reverseRecursion2(arr, start+1, n);
}


void reverseRecursion(int arr[], int start, int end) {
    if(start >= end) return;
    swap(arr[start],arr[end]);
    return reverseRecursion(arr, start+1,end-1);
}

bool isPalindrome(string &s, int i) {
    if(i >= s.size()/2) return true;
    if(s[i]!= s[s.size()-i-1]) return false;
    isPalindrome(s, i+1);
}

void printArray(int arr[], int size) {
   for (int i = 0; i < size; i++)
   cout << arr[i] << " ";
   cout << endl;
}

int main() {
    // Write C++ code here
    // std::cout << "Hello world!";
    // int arr[4] = {1,2,3,4};
    // int n = sizeof(arr) / sizeof(arr[0]);
    // reverseArray(arr, 0, n-1);
    // reverseRecursion2(arr,0, n);
    // printArray(arr, n);
    string s = "11221";
    cout << isPalindrome(s,0);
    return 0;
}