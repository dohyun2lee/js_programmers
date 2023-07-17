function solution(board) {
    var answer = 0;
    
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board.length;j++) {
            if (i==0&&j!=0&&j!=board.length-1) {
              if (board[i][j-1]!=1&&board[i][j]!=1&&board[i][j+1]!=1&&board[i+1][j-1]!=1&&board[i+1][j]!=1&&board[i+1][j+1]!=1) {
                answer++;
              }
            } else if (i==0&&j==0) {
                if (board[i][j]!=1&&board[i][j+1]!=1&&board[i+1][j]!=1&&board[i+1][j+1]!=1) {
                  answer++;
                }
            } else if (i==0&&j==board.length-1) {
                if (board[i][j-1]!=1&&board[i][j]!=1&&board[i+1][j-1]!=1&&board[i+1][j]!=1) {
                  answer++;
                }
            } else if (i==board.length-1&&j!=0&&j!=board.length-1) {
                if (board[i-1][j-1]!=1&&board[i-1][j]!=1&&board[i-1][j+1]!=1&&board[i][j-1]!=1&&board[i][j]!=1&&board[i][j+1]!=1) {
                  answer++;
                }
            } else if (i==board.length-1&&j==0) {
                if (board[i-1][j]!=1&&board[i-1][j+1]!=1&&board[i][j]!=1&&board[i][j+1]!=1) {
                  answer++;
                }
            } else if (i==board.length-1&&j==board.length-1) {
                if (board[i-1][j-1]!=1&&board[i-1][j]!=1&&board[i][j-1]!=1&&board[i][j]!=1) {
                  answer++;
                }
            } else {
                if (board[i-1][j-1]!=1&&board[i-1][j]!=1&&board[i-1][j+1]!=1&&board[i][j-1]!=1&&board[i][j]!=1&&board[i][j+1]!=1&&board[i+1][j-1]!=1&&board[i+1][j]!=1&&board[i+1][j+1]!=1) {
                  answer++;
                }
            }
        }  
      }
    
    return answer;
}
