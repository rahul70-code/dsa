/*

    Bitset(int size) Initializes the Bitset with size bits, all of which are 0.
    void fix(int idx) Updates the value of the bit at the index idx to 1. If the value was already 1, no change occurs.
    void unfix(int idx) Updates the value of the bit at the index idx to 0. If the value was already 0, no change occurs.
    void flip() Flips the values of each bit in the Bitset. In other words, all bits with value 0 will now have value 1 and vice versa.
    boolean all() Checks if the value of each bit in the Bitset is 1. Returns true if it satisfies the condition, false otherwise.
    boolean one() Checks if there is at least one bit in the Bitset with value 1. Returns true if it satisfies the condition, false otherwise.
    int count() Returns the total number of bits in the Bitset which have value 1.
    String toString() Returns the current composition of the Bitset. Note that in the resultant string, the character at the ith index should coincide with the value at the ith bit of the Bitset.

*/


class Bitset {
public:
    string s, flipp;
    int ones = 0, siz = 0;
    Bitset(int size) {
        s = string(size, '0'); flipp = string(size, '1');
        siz = size;
    }
    void fix(int idx) {
        if(s[idx] == '0') ones++;  
        s[idx] = '1'; flipp[idx] = '0'; 
    }
    void unfix(int idx) {
        if(s[idx] == '1') ones--;
        s[idx] = '0'; flipp[idx] = '1';
    }
    void flip() {
        ones = siz - ones;
        s.swap(flipp);
    }
    bool all() { return ones == siz; }
    bool one() { return ones; }
    int count() { return ones; }
    string toString() { return s; }
};