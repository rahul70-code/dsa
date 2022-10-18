// Online C++ compiler to run C++ program online
#include <iostream>
#include <string>
using namespace std;

long long maximumSubsequenceCount(string text, string pattern) {
    long long res=0, cnt1 = 0, cnt2 = 0;
    for(char &c : text) {
        if (c == pattern[1])
                res += cnt1, cnt2++;
            if (c == pattern[0])
                cnt1++;
        cout << res << " ";
        cout << endl;
    }
    return res + max(cnt1, cnt2);
}

int main() {
    // Write C++ code here
    string text = "abdcdbc", pattern = "ac";
    cout << maximumSubsequenceCount(text, pattern);
    /*  res=0, c1=0, c2=0
        a -> res=0, c1=1, c2=0
        b -> res=0, c1=1, c2=0
        d -> res=0, c1=1, c2=0
        c -> res=1, c1=1, c2=1
        d -> res=1, c1=1, c2=1
        b -> res=1, c1=1, c2=1
        c -> res=2, c1=1, c2=2
        res + max(c1,c2) -> 2 + 2 = 4
    */
    return 0;
}