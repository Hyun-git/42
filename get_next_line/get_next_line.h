
#ifndef GET_NEXT_LINE_H
# define GET_NEXT_LINE_H

#include <unistd.h>
#include <stdlib.h>

# ifndef BUFFER_SIZE
#  define BUFFER_SIZE 50
# endif

char	*ft_substr(char const *s, unsigned int start, size_t len);
int	ft_strlen(const char *str);
char	*ft_strchr(const char *str, int c);
char	*ft_strdup(const char *str);
char	*ft_strjoin(char const *s1, char const *s2);
static	char	*ft_reads(int fd, char *buffer, char *next_next_line);
static	char	*ft_out(char *line);
char	*get_next_line(int fd);



#endif
