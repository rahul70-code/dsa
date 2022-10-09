function maximumWins(a) {
    let n = a.length;
    let b = [];
    for (let i = 1; i <= 2*n; i++) {
        if (!a.includes(i)) b.push(i)
    };
    console.log(b)
    let i = 0, count = 0;
    while (i < n) {
        for (let j = 0; j < b.length; j++) {
            if (b[j] > a[i] && b[j] != -1) {
                count++;
                b[j] = -1;
            };
        };
        i++;
    };
    return count;
};

console.log(maximumWins([4,3]))


/*

    Time Complexity: O(N)
    Space Complexity: O(N)

    where 'N' is the number of cards in the deck.


#include <vector>
#include <unordered_set>
using namespace std;

int maximumWins(vector<int> &a) {

    // Declaring a variable 'n' as the total number of cards in the deck.
    int n = 2 * a.size();

    // Declaring a hash set 's' and storing all of Bob's cards.
    unordered_set<int> s;
    for (int i = 0; i < n / 2; ++i) {
        s.insert(a[i]);
    }

    /* Declaring two arrays, 'alice' and 'bob', for storing 
    Alice's and Bob's cards respectively, in sorted order. 
    vector<int> alice, bob;

    // Running a loop 'i' from 1 to 'n' for iterating over all the cards of the deck.
    for (int i = 1; i <= n; ++i) {

        /* Inserting card 'i' at the back of the array 'alice' if it is not present in 's'.
        Otherwise, inserting it at the back of the array 'bob'. 
        if (s.find(i) == s.end()) {
            alice.push_back(i);
        }
        else {
            bob.push_back(i);
        }
    }

    /* Declaring a variable 'ind' for storing the index of Alice's card
    and a variable 'ans' for storing the number of rounds Alice wins. 
    int ind = 0, ans = 0;

    // Running a loop 'i' from 0 to 'N / 2 - 1' for iterating over Bob's cards.
    for (int i = 0; i < n / 2; ++i) {

        /* Running a while loop with condition that 'ind' is inside bounds, 
        and Alice's card 'alice[ind]' is smaller than Bob's card 'bob[i]'. 
        while (ind < n / 2 and alice[ind] < bob[i]) {

            // Incrementing 'ind'.
            ind++;
        }
        // Breaking from the loop if 'ind' is out of bounds.
        if (ind == n / 2) {
            break;
        }

        // Incrementing 'ans' and 'ind' since Alice's current card beats Bob's card.
        ans++;
        ind++;
    }

    // Returning the final answer 'ans'.
    return ans;
}
*/