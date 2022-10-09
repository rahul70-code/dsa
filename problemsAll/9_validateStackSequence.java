
// greedy approach
class Solution {
    public boolean validateStackSequence(int[] pushed, int[] popped) {
        // take the length of pushed array
        int N = pushed.length;
        Stack<Integer> stack = new Stack();
        // initialize counter
        int j=0;
        for(int x: pushed) {
            // push pushed array elements in stack
            stack.push(x);
            // if stack peek element is equal to popped element -> pop the stack and increment count
            while(!stack.isEmpty() && j<N && stack.peek() == popped[j]){
                stack.pop();
                j++;
            }
        }
        // if count is equal to pushed array length -> true : false
        return j == N;
        // return stack.isEmpty(); // or if stack is empty return true else false
    }
}