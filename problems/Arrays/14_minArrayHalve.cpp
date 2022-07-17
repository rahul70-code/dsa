int halveArray(vector<int> &nums) {
    double s = accumulate(begin(nums), end(nums), 0.0), k=0, cnt=0;
    priority_queue<double> pq(begin(nums), end(nums));
    while(s-k > s/2) {
        double x = pq.top();
        pq.pop();
        k+=x/2;
        pq.push(x/2);
        cnt++;
    };
    return cnt;
}