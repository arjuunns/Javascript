#include <bits/stdc++.h>
using namespace std;
void helper(int sum, int money, int &ans, int coins)
{
    if (sum > money) return;
    if (sum == money) {
        ans = min(ans, coins);
        return;
    }
    coins = coins + 1;
    helper(sum + 3, money, ans, coins);
    helper(sum + 5, money, ans, coins);
    helper(sum + 10, money, ans, coins);
}

int main() {
    int sum = 0;
    int money = 27;
    int ans = INT_MAX;
    int coins = 0;
    helper(sum, money, ans, coins);
    if (ans == INT_MAX) ans = -1;
    cout << ans;
    return 0;
}