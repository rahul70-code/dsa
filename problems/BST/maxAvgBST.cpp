// TODO: write comments and flow, change it in JS


#include<bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node *left;
    Node *right;
    Node(int x)
    {
        val = x;
        left = NULL;
        right = NULL;
    }
};

double maxm_avg = 0.0;

int subtree_sum(Node* root, int &count) {
    if (root == NULL)
        return 0;

    int left_count = 0;
    int right_count = 0;
    // calculate count of left subtree
    int left_sum = subtree_sum(root->left, left_count);
    // calculate count of right subtree
    int right_sum = subtree_sum(root->right, right_count);
    // calculate sum
    int sum = left_sum + right_sum + root->val;
    // calculate count;
    count = left_count + right_count + 1;
    // calculate max average
    maxm_avg = max(maxm_avg, (double)sum / count);
    return sum;
}
double maximum_avg_subtree(Node* root) {
    // for counting left and right subtree for calculating avg.
    int count = 0;
    subtree_sum(root, count);
    return maxm_avg;
}

int main()
{
    Node* root = new Node(15);
    root->left = new Node(8);
    root->right = new Node (6);

    cout << maximum_avg_subtree(root) << endl;

    return 0;
}