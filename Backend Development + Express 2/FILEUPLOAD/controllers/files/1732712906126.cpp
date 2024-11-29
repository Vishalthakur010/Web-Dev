// print the elements of a stack

#include<iostream>
#include<stack>
using namespace std;

int main(){
    stack<int> st;

    st.push(32);
    st.push(44);
    st.push(67);
    st.push(12);

    st.pop();
    st.pop();

    cout << st.size() << "\n";
    cout << st.top() << "\n";

    st.push(87);
    st.push(91);
    st.push(52);

    cout << st.top() << "\n";

    return 0;
}